#!/usr/bin/env bash
set -e

libraries=(
	"karet.util"
	"kefir.partial.lenses"
	"kefir.partial.lenses.history"
	"kefir.partial.lenses.validation"
)

for x in "${libraries[@]}"; do
	yarn link "@types/$x"
done
