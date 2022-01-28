class AddNameToTrails < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :trail_name, :string
    change_column_null :trails, :trail_name, false
  end
end
