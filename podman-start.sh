podman kill lonniegerol.com
podman rm lonniegerol.com

if [[ $1 = dev ]]
then
	export SITE_ENV="development"
	podman build -t lontronix/lonniegerol.com .
	podman run -i -t -p 8080:8080 \
		-e PORT='8080' \
		-e SITE_ENV="development" \
		--name lonniegerol.com \
		lontronix/lonniegerol.com
elif [[ $1 = prod ]]
then
	export SITE_ENV="production"
	podman build -t lontronix/lonniegerol.com .
	podman run -i -t -p 8080:8080 \
		-e PORT='8080' \
		-e SITE_ENV="production" \
		--name lonniegerol.com \
		lontronix/lonniegerol.com
fi
