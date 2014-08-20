json.array!(@capexes) do |capex|
  json.extract! capex, :id, :title, :description, :ex_type, :amount, :created_at
  json.url capex_url(capex, format: :json)
end
