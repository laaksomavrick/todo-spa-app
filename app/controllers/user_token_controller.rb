class UserTokenController < Knock::AuthTokenController

  skip_before_action :authenticate_user, raise: false

end
