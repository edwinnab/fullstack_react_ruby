class ApplicationController < Sinatra::Base 
    set :default_content_type, 'application/json'

    get "/" do
        "hello"
    end

    #fetch data from the db
    get "/students" do
        students = Student.all 
        students.to_json
    end

    #post data to the db
    post "/students" do
        student = Student.create(name: params[:name],
            email: params[:email])
        student.to_json
    end

    #delete the data from the db
    delete "/students/:id" do
        student = Student.find(params[:id])
        student.destroy
        student.to_json
    end



end
