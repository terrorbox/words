#!/bin/sh
#
# This script expects to find the following in the current directory:
#   words.js.pre  - the preamble of the resulting javascript file
#   words.js.post - the postamble of the resulting javascript file
#   wordslist.txt  - a file containing zee words, one phrase per line
#
# It will output a file called words.js
# It can be run from this directory as ./build.sh

cat words.js.pre > words.js
NUMJARGON=`wc -l wordslist.txt | awk '{print $1}'`
COUNTER=0
while read line; do
    COUNTER=`expr $COUNTER + 1`;
    if [ "$COUNTER" = "$NUMJARGON" ]; then
        echo "            [$line]" >> words.js
    else
        echo "            [$line]," >> words.js
    fi
done < wordslist.txt
cat words.js.post >> words.js
