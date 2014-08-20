class CapexSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :ex_type, :amount, :created_at
end
