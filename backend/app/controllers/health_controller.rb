class HealthController < ApplicationController
  def ping
    render json: {
      status: "ok"
    }
  end

  def hello
    render json: {
      message: "Hello!"
    }
  end

  def about
    render json: {
      framework: "Ruby on Rails",
      ruby: RUBY_VERSION,
      rails: Rails.version
    }
  end
end