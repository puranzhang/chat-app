## chat-app

This is a html-base chatting app that has various features for communivation researches. It is mainly powered by [socket.io](http://socket.io) and [Node.js](https://nodejs.org/en/). Please follow the instructions to set up experiment computers (assuming mac for developments, any other platforms should be compatible with client end).
<img src="/images/chat page.png" width="565" height="365"  align="middle">

- Installing on server end
  - Make sure [Node.js is installed](https://nodejs.org/en/) on your computer;
  - Do `npm install express --save` (npm should come with Node.js) in your terminal to have the framework express installed;
  - Do `npm install socket.io --save ` to have socket.io installed;

- Running on server end
  - Open the application **open chat** (script available [here](https://github.com/puranzhang/chat-app/blob/master/automated%20tool/open%20chat.scpt)) in the folder that displays your IP address (server's IP) and run the server automatically;
  - In this case, **Terminal** will be launched with your IP address on the first line (after the command) and a message `Server listening at port 3000` on the second line that indicates a successful server setup;
  - Remain this window open until the experiment is finished. When finished, open the application **stop chat** (script available [here](https://github.com/puranzhang/chat-app/blob/master/automated%20tool/stop%20chat.scpt)) to close the server;
  - Log file will be generated as `data.csv` in the folder (you should save the file somewhere else after each experiment since it's going to be overwritten once you restart the server);

- Runing on client end
  - Open a blank web page with any browser;
  - Point the browser to the server IP address (plus `:3000` to the port) by typing, for example, `10.123.1.321:3000` in address bar;
  - The welcome/ID input page should pop up;

<br></br>
- TODO:
  - [x] m - m connection
  - [x] export log file in .csv
  - [x] UI design
  - [x] installing on lab comps
  - [x] log msg data with senders' name
  - [x] start displaying msg from bottom
  - [x] instructions for experimenters
  - [x] "keep talking and nobody explodes" extensions (menu parse helper; modkit to have same bomb for experiment)
