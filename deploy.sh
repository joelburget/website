#!/bin/bash

rsync -avz -e ssh _site/ personal:/srv/webapps/joelburget/src
rsync -avz -e ssh static/ personal:/srv/webapps/joelburget/src/static
# also restart nginx?
