class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.integer :park_id, null: false
      t.integer :latitude, null: false
      t.integer :longitude, null: false
      t.text  :description, null: false
      t.integer :length, null: false
      t.integer :elevation_gain, null: false
      t.string :route_type, null: false
      t.string :country, null: false
      t.string :state, null: false
      t.timestamps
    end
  end
end
