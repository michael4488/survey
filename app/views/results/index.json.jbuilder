json.array!(@results) do |result|
  json.extract! result, :name, :time
  json.url result_url(result, format: :json)
end