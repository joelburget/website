#!/bin/bash

rsync -avz -e ssh _site/ personal:/srv/webapps/joelburget/src
# also restart nginx?
