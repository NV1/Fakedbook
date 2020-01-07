
@res.each do |res|
    json.set! res.id do 
        json.partial! 'user', user:res
    end
    
end