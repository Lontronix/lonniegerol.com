podman build -t lontronix/lonniegerol.com .
podman run -i -t -p 4200:4200 \
	-e PORT='4200' \
	lontronix/lonniegerol.com
