FROM node:latest

# Create the directory!
RUN mkdir -p /bot
WORKDIR /bot

# Copy and Install our bot
COPY package.json /bot
RUN npm install

# Our precious bot
COPY . /bot

# Create the settingsd volume
RUN mkdir -p /bot/settings
VOLUME /bot/settings

# Start me!
CMD ["npm", "start"]
