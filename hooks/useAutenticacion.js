import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

function useAutenticacion() {
    const [ usuarioAutenticado, guardarUsusarioAutenticado ] = useState(null);

    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(usuario => {
            if( usuario) {
                guardarUsusarioAutenticado(usuario);
            }else {
                guardarUsusarioAutenticado(null);
            }
        });
        return () => unsuscribe();
        
    }, []);

    return usuarioAutenticado;
}

export default useAutenticacion;