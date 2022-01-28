class ChangeTypeForTrail < ActiveRecord::Migration[5.2]
  def change
    change_column :trails, :description, :string
    change_column :trails, :intro, :string
  end
end
