#!/bin/bash
find images/* -type d -not -path "*/small" | while read subdir;
do
  find $subdir -type f -maxdepth 1 \( -iname \*.jpg -o -iname \*.png -o -iname \*.jpeg \) | grep . > /dev/null
  if [ $? -eq 0 ] 
  then 
    mkdir -p $subdir/small
    for img in $subdir/*.jpg; do
      [ -e "$img" ] || continue
      sips -Z 1536 -o $subdir/small/ $img
    done
    for img in $subdir/*.jpeg; do
      [ -e "$img" ] || continue
      sips -Z 1536 -o $subdir/small/ $img
    done
    for img in $subdir/*.png; do
      [ -e "$img" ] || continue
      sips -Z 1536 -o $subdir/small/ $img
    done
  fi
done