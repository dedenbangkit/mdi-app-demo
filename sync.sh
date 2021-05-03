#!/usr/bin/env bash

DOMAIN="mdi-app-demo.tc.akvo.org"

rsync \
    --archive \
    --compress \
    --progress \
    --exclude=ci \
    --exclude=node_modules \
    ./build/ siteground:/home/customer/www/$DOMAIN/public_html/

echo "Fixing permissions..."

ssh siteground "find www/${DOMAIN}/public_html/ -not -path "*.well-known*" -type f -print0 | xargs -0 -n1 chmod 644"

ssh siteground "find www/${DOMAIN}/public_html/ -type d -print0 | xargs -0 -n1 chmod 755"

echo "Done"

