#!/usr/bin/env bash

__dirpath="$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)"

cat ${__dirpath}/../package.json | grep version | cut -d'"' -f4