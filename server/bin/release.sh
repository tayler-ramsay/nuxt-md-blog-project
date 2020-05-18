#!/usr/bin/env bash

set -eE -o functrace
set -o errexit  # Exit if any command returns a non-zero status
set -o pipefail # Fail if any command in a pipeline returns a non-zero status
shopt -s nullglob
shopt -s expand_aliases


# --- Script Constants ---------------------------------------------------------

__dirname="$(dirname "${BASH_SOURCE[0]}")"
__dirpath="$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)"
__filename="$(basename "${BASH_SOURCE[0]}")"
__filepath="${__dirpath}/${__filename}"

RELEASE_TYPE="$1"
RELEASE_VERSION=""
NEXT_VERSION=""
MAVEN_OPTS=""
MAVEN_ARGS="-Dmaven.javadoc.skip=true"



function getCurrentVersion() {
	cat ${__dirpath}/../pom.xml | grep  '<version>' | head -1 | cut -d'>' -f2 | cut -d'<' -f1
}

function setVersions() {
	currentVersion=$(getCurrentVersion | cut -d- -f1)

	case "$RELEASE_TYPE" in
		milestone)
		RELEASE_VERSION="$currentVersion"
		bumpVersion=$(echo "$currentVersion" | cut -d. -f4)
		bumpVersion=$((${bumpVersion:1}+1))
		NEXT_VERSION="$(echo "$currentVersion" | cut -d. -f1-3).M$bumpVersion"
		;;
		patch)
		RELEASE_VERSION=$(echo "$currentVersion" | cut -d. -f1-3)
		bumpVersion=$(($(echo "$currentVersion" | cut -d. -f3)+1))
		NEXT_VERSION="$(echo "$currentVersion" | cut -d. -f1-2).$bumpVersion.M1"
		;;
		minor)
		bumpVersion=$(($(echo "$currentVersion" | cut -d. -f2)+1))
		RELEASE_VERSION="$(echo "$currentVersion" | cut -d. -f1).$bumpVersion.0"
		NEXT_VERSION="$(echo "$currentVersion" | cut -d. -f1).$bumpVersion.1.M1"
		;;
		major)
		bumpVersion=$(($(echo "$currentVersion" | cut -d. -f1)+1))
		RELEASE_VERSION="$bumpVersion.0.0"
		NEXT_VERSION="$bumpVersion.0.1.M1"
		;;
		*)
		echo "ERROR: Unsupported release type - expecting one of: milestone, major, minor, patch"
		printUsage
		;;
	esac

	NEXT_VERSION="$NEXT_VERSION-SNAPSHOT"
}

failure() {
  local lineno=$1
  local msg=$2
  echo "Failed at $lineno: $msg"
}

function printUsage() {
	echo "Usage: release.sh [releaseType]"
	echo "ReleaseType: milestone,patch,minor,major"
	exit 1
}

function run_mvn {
    MAVEN_OPTIONS="$MAVEN_OPTS" ${__dirpath}/../mvnw --file ${__dirpath}/../pom.xml                   \
        -DscmCommentPrefix="[RELEASE] "    \
        -Darguments="${MAVEN_ARGS}" $@
}

trap 'failure ${LINENO} "$BASH_COMMAND"' ERR
echo "Releasing a $RELEASE_TYPE version"

setVersions

echo "Release Version: $RELEASE_VERSION"
echo "Next Version: $NEXT_VERSION"
echo "Preparing release..."

run_mvn -B release:prepare -DreleaseVersion=${RELEASE_VERSION} -DdevelopmentVersion=${NEXT_VERSION}

if [[ $? -gt 0 ]]; then
	exit 1;
fi

run_mvn -B release:perform

if [[ $? -gt 0 ]]; then
	exit 1;
fi

echo "Release $RELEASE_VERSION created."

artifactId="$(cat ${__dirpath}/../pom.xml |  grep  '<artifactId>' | head -1 | cut -d'>' -f2 | cut -d'<' -f1)"

#${__dirpath}/post-rocket-chat-message.sh "${artifactId} version ${RELEASE_VERSION} released."


