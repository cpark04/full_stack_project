class ChangeLatLongForTrails < ActiveRecord::Migration[5.2]
  def change
    change_column :trails, :longitude, :float
    change_column :trails, :latitude, :float
  end
end
