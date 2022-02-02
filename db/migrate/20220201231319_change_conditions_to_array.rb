class ChangeConditionsToArray < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :conditions
    add_column :reviews, :conditions, :string, array: true, default: []
  end
end
