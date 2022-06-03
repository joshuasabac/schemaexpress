echo "generating schema"

docker run -u 1001 --network="fullscale-employee-devtools_rocks" -v "/home/jsabac/schemaexpress/output:/output"  schemaspy/schemaspy -debug -t mariadb -s employee -db employee -host rocks-db -u employee -p thisisapassword
