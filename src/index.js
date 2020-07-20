import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inicio from './comp/Inicio';
import CajitaBusca from './comp/CajitaBusca';
import CajitaCompra from './comp/CajitaCompra';
import CajitaEntregadom from './comp/CajitaEntregadom';
import CrearCuenta from './comp/CrearCuenta'
import IniciarSesion from './comp/IniciarSesion'; 
import Preferencias from './comp/Preferencias'; 
import PedidoReali from './comp/PedidoReali'; 

const container =document.getElementById('root');
ReactDOM.render(<Inicio/>
,container);