import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {

    state = {
        name : '',
        email: '',
        address : {
            street : '',
            postalCode: ''
        },
        loading:false
    }

    orederHandler = (event) => {
        event.preventDefault();
        this.setState({loading:true})
        const order =  {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Prmaod Rawate',
                address:{
                    street: 'Satara Road',
                    zipcode:411037,
                    country:'India'
                },
                email:'rawatepramosmd@gmail.com',
                deliveryMethod: 'fastest'
            }
        }
        axios.post('/orders.json',order)
            .then(response => {
                this.setState({loading:false})
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({loading:false})
            });
    }

    render() {
        let form = (
                <form className={classes.ContactData}>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orederHandler}>ORDER</Button>
                </form>
            );
        if(this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
} 

export default ContactData;