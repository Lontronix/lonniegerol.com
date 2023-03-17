podman build -t lontronix/lonniegerol.com .
podman run -i -t -p 8080:8080 \
	-e PORT='8080' \
	lontronix/lonniegerol.com
