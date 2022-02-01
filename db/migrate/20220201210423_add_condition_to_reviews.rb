class AddConditionToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :conditions, :string
  end
end
