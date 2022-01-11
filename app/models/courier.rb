class Courier < ApplicationRecord
has_many :items, dependent: :destroy
has_many :pickups
has_many :customers, through: :items


has_secure_password

validates :name, presence: true, uniqueness: true



# def password=(new_password)
#     salt = BCrypt::Engine::generate_salt
#     self.password = BCrypt::Engine::secret_hash(new_password, salt)
#   end

#   def authenticate(password)
#     salt = password_digest[0..28]
#     return nil unless BCrypt::Engine::secret_hash(password, salt) == self.password_digest
#     self
#   end


private

    # def new_hash(input)
    #     input.bytes.reduce(:+)
        
    # end

end
