[ ![Codeship Status for narendran/pensieve](https://codeship.com/projects/0967cac0-e821-0132-b8ea-16e9dffe0695/status?branch=master)](https://codeship.com/projects/82708)

# Pensieve

A system for real-time crowdsourced photo aggregation and sharing. It is intended to be used in celebrations like marriage functions, birthday parties etc..

## Motivation

Places like [Sivakasi](http://en.wikipedia.org/wiki/Sivakasi) in India do not have access to good internet connection. Consider events like a marriage celebration where we would want to live-stream the event to our friends and relatives who live far away. The bandwidth in Sivakasi wouldn't allow the traditional approaches of Hangout/Skype/You-name-it video streaming. The goal of this project is to provide a much better experience by crowdsourcing photos from attendants and streaming them in real-time to all the friends & relatives staying far away. Besides that, the collected photos can be streamed on to a projector in the marriage hall so that attendants get a 360&deg; experience of the event, even while chatting with their long missed friends.

People watching the stream of photos can "like" photos as they are streamed. Based on the number of likes each photo gets, an album will be generated on-demand after the event is over. Given that all the photos are from smartphones, and not from the official photographer, we get candid photography by default, and the photos will be laid out beautifully based on how many people liked each photo. Currently, the idea is to have a mosaic-style layout where images with higher number of likes are diplayed larger than those with lesser/no likes.

## Design

I will update this section once I get a sense of the architecture. As of now, its going to be something based on express+nodejs, websocket, base64 with a HTML/CSS/JS front-end. I am little skeptical about doing image processing with javascript.

## Contributions

If you like this idea, feel free to reach out to me!
