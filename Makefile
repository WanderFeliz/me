run:
	docker-compose up fontend-dev

stop:
	docker-compose down

build-prod:
	docker-compose build frontend-build

build-dev:
	docker-compose build frontend-dev
