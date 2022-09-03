ARG BASE_IMAGE
FROM "${BASE_IMAGE}"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD npm run dev
