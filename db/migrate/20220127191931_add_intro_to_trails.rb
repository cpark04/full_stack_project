class AddIntroToTrails < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :intro, :text
  end
end
