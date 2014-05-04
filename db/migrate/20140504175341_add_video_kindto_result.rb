class AddVideoKindtoResult < ActiveRecord::Migration
  def change
    add_column :results, :video_kind, :integer
  end
end
