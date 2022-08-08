up: build
	npm install knex -g
	npm run migrate

build:
	docker-compose up --build -d
	sleep 10

down: 
	docker-compose down --volumes
