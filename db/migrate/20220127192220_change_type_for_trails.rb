class ChangeTypeForTrails < ActiveRecord::Migration[5.2]
  def change
    change_column :trails, :length, :string
    change_column :trails, :elevation_gain, :string
    change_column :trails, :elevation_gain, :string
  end
end
