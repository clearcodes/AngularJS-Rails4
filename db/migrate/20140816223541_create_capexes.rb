class CreateCapexes < ActiveRecord::Migration
  def change
    create_table :capexes do |t|
      t.string :title
      t.string :description
      t.integer :ex_type
      t.float :amount

      t.timestamps
    end
  end
end
