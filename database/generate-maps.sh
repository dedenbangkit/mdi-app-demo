curl -s "https://rsr.akvo.org/rest/v1/project_update/?format=json&search=%22mali%22&limit=100" \
    | jq '.results | [.[]? | select(.latitude!=null)] | [.[]? | {"name":.title,"coordinates":[.latitude,.longitude], "markerOffset":15}]' > example-points.json
