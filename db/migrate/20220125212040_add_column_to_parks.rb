class AddColumnToParks < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :intro, :text
  end
end
