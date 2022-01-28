class AddFacilitiesContactTipsGettingThereToTrails < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :facilities, :string
    add_column :trails, :contact, :string
    add_column :trails, :tips, :string
    add_column :trails, :getting_there, :string
  end
end
