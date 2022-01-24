class AddColumnsToParks < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :latitude, :float
    change_column_null :parks, :latitude, false

    add_column :parks, :longitude, :float
    change_column_null :parks, :longitude, false

    add_column :parks, :country, :string
    change_column_null :parks, :country, false

    add_column :parks, :state, :string
    change_column_null :parks, :state, false

    add_column :parks, :directions, :text

    remove_column :parks, :location
  end
end
