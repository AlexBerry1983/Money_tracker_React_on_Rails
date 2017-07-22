# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Category.delete_all
Transaction.delete_all

Category.create(name: 'Utility Bills')
Category.create(name: 'Entertainment')
Category.create(name: 'Paul\'s Coleslaw habit')

Transaction.create(name: 'Electricity Bill', amount: 74.37, date: '2016-12-13')
Transaction.create(name: 'Amazon', amount: 54.29, date: '2016-03-11')
Transaction.create(name: 'McDonalds', amount: 5.98, date: '2016-05-08')
