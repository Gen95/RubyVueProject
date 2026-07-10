class Task < ApplicationRecord
    belongs_to :category, optional: true
    validates :title, presence: true, length: { minimum: 3, maximum: 1000 }
end
