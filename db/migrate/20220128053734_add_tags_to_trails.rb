class AddTagsToTrails < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :tags, :string
  end
end
