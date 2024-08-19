# HTML Resume
My resume written in HTML.

## Setup / Font

Setting up NPM: `npm install puppeteer`

this font I used: https://fonts.google.com/specimen/Tinos

## Converting pics with ffmpeg

#### From big pics to pics

`cd big-pics/`

`for i in *; do ffmpeg -i "$i" -qmin 1 -qscale:v 1 "../pics/$(basename "$i" .${i##*.}).jpeg"; done`

#### From pics to small pics

`cd pics/`

`for i in *; do ffmpeg -i "$i" -vf "scale=-1:360" -qscale:v 3 "../small-pics/$(basename "$i" .${i##*.}).jpeg"; done`

I sincerely hope that my GitHub action works.
