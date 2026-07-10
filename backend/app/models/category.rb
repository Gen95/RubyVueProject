class Category < ApplicationRecord
    has_many :tasks, dependent: :nullify
    validates :name, presence: true, length: { minimum: 3, maximum: 100 }
end
