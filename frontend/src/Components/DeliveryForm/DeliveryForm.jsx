// * Base
import { coffeeContext } from '../../helpers/coffeeContext';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { Formik } from 'formik';

// * Components
import Button from '../Button/Button';
import Input from '../Input/Input';
import Icon from '../Icon/Icon';
import Page from '../Page/Page';
import AdressCardTitle from './AdressCardTitle';
import PaymentCardTitle from './PaymentCardTitle';

// *  Початкові значення
const INITIAL_VALUES = {
  payment: '',
  street: '',
  number: '',
  notes: '',
  state: '',
  flat: '',
  city: '',
  zip: '',
};

// * SUBMIT
const onSubmit = (values, { setSubmitting, resetForm }) => {
  console.log(values);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  }, 400);
};

// * REGULAR EXPRESSIONS
const ZIP_REG_EXP = /^[0-9-]+$/;
const ONLY_LETTERS = /^[A-Za-z]+$/;
const ONLY_NUMBERS = /^[0-9]*$/;

// * FORM VALIDATION
const validators = ({ zip, street, number, city, state, flat, payment }) => {
  const errors = {};

  // * Zip code validation
  if (!zip) {
    errors.zip = 'Zip code is required';
  } else if (!ZIP_REG_EXP.test(zip)) {
    errors.zip = 'Invalid zip code';
  }

  // * Street validation
  if (!street) {
    errors.street = 'Street is required';
  } else if (street.length < 4) {
    errors.street = 'Street must be at least 4 characters long';
  } else if (!ONLY_LETTERS.test(street)) {
    errors.street = 'Street must not contain numbers';
  }

  // * Number validation
  if (!number) {
    errors.number = 'Number is required';
  } else if (!ONLY_NUMBERS.test(number)) {
    errors.number = 'Number must contain only digits';
  }

  // * Flat validation
  if (!flat) {
    errors.flat = 'Flat is required';
  }

  // * City validation
  if (!city) {
    errors.city = 'City is required';
  } else if (!ONLY_LETTERS.test(city)) {
    errors.city = 'City must not contain numbers';
  }

  // * State validation
  if (!state) {
    errors.state = 'State is required';
  } else if (!ONLY_LETTERS.test(state)) {
    errors.state = 'State must not contain numbers';
  }

  // * Payment validation
  if (!payment) {
    errors.payment = 'Payment method is required';
  }

  return errors;
};

const DeliveryForm = () => {
  const { t } = useTranslation();
  const { coffeeNameContext } = useContext(coffeeContext);

  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validators}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleSubmit,
          isSubmitting,
          handleBlur,
          touched,
          errors,
          values,
        }) => {
          return (
            <form
              className='wrapper'
              onSubmit={(e) => {
                e.preventDefault(); // * Prevent the default form submission behaviour(instant errors on submit)
                handleSubmit();
              }}
            >
              <div className='flex gap-[30px]'>
                <div className='w-full max-w-[640px]'>
                  {/* Title */}
                  <h3 className='font-[var(--fw-bold)] text-[18px] font-[var(--f-baloo)] text-[var(--c-base-subtitle)] mb-4 mt-10'>
                    {t('form.fill')}
                  </h3>

                  {/* Adress card */}
                  <div className='px-[40px] rounded-[6px] pb-5 bg-[var(--c-base-card)] mb-3 max-w-[640px]'>
                    <AdressCardTitle />

                    {/* Zip code */}
                    <Input
                      className='px-2 h-10 rounded-[4px] border-10 solid border-[var(--c-base-button)]'
                      error={errors.zip && touched.zip && errors.zip}
                      placeholder={t('form.zip')}
                      value={values.zip}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name='zip'
                    />

                    {/* Street */}
                    <Input
                      className='px-2 h-10 rounded-[4px] border-10 solid border-[var(--c-base-button)] w-full'
                      error={errors.street && touched.street && errors.street}
                      placeholder={t('form.street')}
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name='street'
                    />

                    <div className='flex'>
                      {/* House number */}
                      <Input
                        className='px-2 h-10 rounded-[4px] border-10 solid border-[var(--c-base-button)] mr-[10px] w-[200px]'
                        error={errors.number && touched.number && errors.number}
                        placeholder={t('form.number')}
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                        type='number'
                        name='number'
                      />

                      {/* Apartament */}
                      <Input
                        className='px-2 h-10 rounded-[4px] border-10 solid border-[var(--c-base-button)] w-full'
                        error={errors.flat && touched.flat && errors.flat}
                        placeholder={t('form.flat')}
                        value={values.flat}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='flat'
                        fullWidth
                      />
                    </div>

                    <div className='flex'>
                      {/* City */}
                      <Input
                        className='px-2 h-10 rounded-[4px] border-10 solid border-[var(--c-base-button)] mr-[10px] w-[200px]'
                        error={errors.city && touched.city && errors.city}
                        placeholder={t('form.city')}
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='city'
                      />

                      {/* Notes */}
                      <div className='relative w-full'>
                        <Input
                          className='px-2 h-10 rounded-[4px] border-10 solid border-[var(--c-base-button)] w-full'
                          error={errors.notes && touched.notes && errors.notes}
                          placeholder={t('form.notes')}
                          value={values.notes}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name='notes'
                        />
                        <span>
                          <em className='absolute top-[10px] right-4 h-4 text-[12px] text-[var(--c-base-lable)]'>
                            Optional
                          </em>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Payment card */}
                  <div className='px-[40px] rounded-[6px] pb-[40px] bg-[var(--c-base-card)] max-w-[640px]'>
                    <PaymentCardTitle />
                    <div className='flex gap-3 m-b-[-20px]'>
                      {/* Credit card */}
                      <label className='w-full cursor-pointer'>
                        <div
                          className={`${
                            values.payment === 'credit'
                              ? 'bg-[var(--c-purple-light)] border-[var(--c-purple)] border-[1px]'
                              : ''
                          } gap-2 justify-center rounded-[6px] hover:bg-[var(--c-base-hover)] ease-in-out transition-all duration-300 items-center px-2 flex h-[50px] w-full max-w-[180px] bg-[var(--c-base-button)]`}
                        >
                          <div className='text-[var(--c-purple)]'>
                            <Icon icon='creditCard' />
                          </div>
                          <div>{t('form.payment.credit')}</div>
                        </div>
                        <Input
                          className='opacity-0'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name='payment'
                          type='radio'
                          noLabel
                          value='credit'
                        />
                      </label>

                      {/* Debit card */}
                      <label className='w-full cursor-pointer'>
                        <div
                          className={`${
                            values.payment === 'debit'
                              ? 'bg-[var(--c-purple-light)] border-[var(--c-purple)] border-[1px]'
                              : ''
                          } gap-2 justify-center rounded-[6px] hover:bg-[var(--c-base-hover)] ease-in-out transition-all duration-300 items-center px-2 flex h-[50px] w-full max-w-[180px] bg-[var(--c-base-button)]`}
                        >
                          <div className='text-[var(--c-purple)]'>
                            <Icon icon='bank' />
                          </div>
                          <div>{t('form.payment.debit')}</div>
                        </div>
                        <Input
                          className='opacity-0'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name='payment'
                          type='radio'
                          noLabel
                          value='debit'
                        />
                      </label>

                      {/* Cash */}
                      <label className='w-full cursor-pointer'>
                        <div
                          className={`${
                            values.payment === 'cash'
                              ? 'bg-[var(--c-purple-light)] border-[var(--c-purple)] border-[1px]'
                              : ''
                          } gap-2 justify-center rounded-[6px] hover:bg-[var(--c-base-hover)] ease-in-out transition-all duration-300 items-center px-2 flex h-[50px] w-full max-w-[180px] bg-[var(--c-base-button)]`}
                        >
                          <div className='text-[var(--c-purple)]'>
                            <Icon icon='money' />
                          </div>
                          <div>{t('form.payment.cash')}</div>
                        </div>
                        <Input
                          className='opacity-0'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name='payment'
                          type='radio'
                          noLabel
                          value='cash'
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right side */}
                {/* // ! idk if this div needed */}
                <div>
                  <h3 className='font-[var(--fw-bold)] text-[18px] font-[var(--f-baloo)] text-[var(--c-base-subtitle)] mb-4 mt-10'>
                    {t('form.delivery.selected')}
                  </h3>
                  <div>
                    {/* Selected Coffe 1 */}
                    <div>
                      {/* <div>{coffeeContext.image}</div> */}
                      <div>
                        <div>{coffeeNameContext} || Did it work?</div>
                        <div>price</div>
                      </div>
                      <div>
                        <div>count</div>
                        <div>remover</div>
                      </div>
                    </div>
                    {/* Selected Coffe 2
                    <div>
                      <div>img</div>
                      <div>
                        <div>name</div>
                        <div>price</div>
                      </div>
                      <div>
                        <div>count</div>
                        <div>remover</div>
                      </div>
                    </div> */}
                  </div>
                  {/* // ! idk if this div needed */}
                </div>
              </div>

              {/* Submit form button*/}
              <Button
                className='register bg-black'
                text='Sign up'
                disabled={isSubmitting}
                type='submit'
              />
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default DeliveryForm;
