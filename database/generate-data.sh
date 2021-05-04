cat example-projects.json | jq '.data | .results | [.[]? | {"id":.id,"name":.name,"desc":.objective,"startDate":.startDate,"endDate":.endDate,"funds":.currentRequestedFunds,"org":[ .organizations | .[]? | {"id":.id,"name":.name,"short":.abbreviation}]}]'

