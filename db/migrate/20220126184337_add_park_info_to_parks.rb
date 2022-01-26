class AddParkInfoToParks < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :acre, :string

    add_column :parks, :hours, :string

    add_column :parks, :contact, :string

    add_column :parks, :social_url, :string

  end
end
