class Task < ApplicationRecord
    validates :title, presence: true, length: { minimum: 3, maximum: 1000 }
end
