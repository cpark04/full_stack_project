class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :park_name, null: false
      t.string :description, null: false
      t.string :location, null: false
      t.timestamps
    end
    add_index :parks, :park_name
  end
end
