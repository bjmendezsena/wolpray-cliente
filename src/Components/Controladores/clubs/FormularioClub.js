import React from 'react';
import { InputComponent } from '../../Fragmentos/InputComponent';
import Desplegable from '../../Fragmentos/desplegable';
import { DesplegableDireccion } from '../../Fragmentos/DesplegableDireccion';
import ListaCheckBox from '../../Fragmentos/ListaCheckBox';
import { InputLimite } from './../../Fragmentos/InputLimite';

export const FormularioClub = ({ obj, orden, funcion }) => {


    const { clubid,
        clubName,
        companyid,
        companyName,
        cityName,
        streetName,
        streetNumber,
        postal_code,
        cityid,
        provinceid,
        provinceName,
        stateid,
        stateName,
        countryName,
        description,
        clubPhone,
        dressCodeid,
        dressCodeDescription,
        coverUrl,
        // latitude,
        // longitude,
        howToGetThere,
        entryCost,
        // openSeason1,
        // closingSeason1,
        // openSeason2,
        // closingSeason2,
        // openSeason3,
        // closingSeason3,
        Musica,
        accessAge,
        DiasAnticipacion,
        maxPeopleInt,
        maxPeopleExt
         } = obj;
    let readonly = false;
    let direccion = '';


    if (orden === 'D' || orden === 'V') {
        readonly = true;
        direccion = `${streetName}, ${streetNumber}, ${postal_code}, ${cityName}, ${provinceName}, ${stateName}, ${countryName}`;
    }

    const anadirMusica = (musicsId) => {
        let listMusic = {
            target: {
                name: 'musicsUpdate',
                value: musicsId.join(',')
            }

        }
        funcion(listMusic);
    }

    return (
        <section className="get_in_touch animate__animated animate__fadeIn">
            <h1 className="title">Formulario club</h1>
            <div className="container">
                <form className="formulario row">
                    <div className="container">
                        {
                            (!readonly && (coverUrl.length === 0 || coverUrl === null)) ?
                                <InputComponent
                                    type='file'
                                    value={coverUrl}
                                    name='coverUrl'
                                    label='Imagen principal'
                                    handleChange={funcion}
                                    readOnly={false}
                                />
                                :
                                <img
                                    src={coverUrl}
                                    alt="Imagen prncipal del club"
                                    width='100%'
                                />

                        }
                    </div>
                    {
                        (readonly) ?
                            <InputComponent
                                type='text'
                                value={clubid}
                                name='clubid'
                                label='Club ID'
                                handleChange={funcion}
                                readOnly={readonly}
                            /> : null
                    }
                    <InputComponent
                        type='text'
                        value={clubName}
                        name='clubName'
                        label='Nombre'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    {
                        (!readonly) ?
                            <Desplegable
                                nombreCampo='companyid'
                                name='companyid'
                                table='companies'
                                label='Seleccione la compañía del club'
                                readValue={funcion}
                                value={companyid}
                            /> :
                            <InputComponent
                                type='text'
                                value={companyName}
                                name='companyName'
                                label='Empresa'
                                handleChange={funcion}
                                readOnly={readonly}
                            />
                    }
                    <InputComponent
                        type='text'
                        value={clubPhone}
                        name='clubPhone'
                        label='Teléfono'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    <InputComponent
                        type='textarea'
                        value={description}
                        name='description'
                        label='Descripción'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    {
                        (!readonly) ?
                            <Desplegable
                                nombreCampo='dressCodeid'
                                name='dressCodeid'
                                table='n_dresscode'
                                label='Seleccione e código de vestimenta'
                                readValue={funcion}
                                value={dressCodeid}
                            /> :
                            <InputComponent
                                type='text'
                                value={dressCodeDescription}
                                name='dressCodeDescription'
                                label='Código de vestimenta'
                                handleChange={funcion}
                                readOnly={readonly}
                            />
                    }
                    <InputComponent
                        type='text'
                        value={accessAge}
                        name='accessAge'
                        label='Edad de acceso'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    <InputComponent
                        type='number'
                        value={maxPeopleInt}
                        name='maxPeopleInt'
                        label='Aforo máximo interior'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    <InputComponent
                        type='number'
                        value={maxPeopleExt}
                        name='maxPeopleExt'
                        label='Aforo máximo terrazas'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    <InputComponent
                        type='number'
                        value={entryCost}
                        name='entryCost'
                        label='Coste de entrada (€)'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    <InputComponent
                        type='number'
                        value={DiasAnticipacion}
                        name='DiasAnticipacion'
                        label='Dias de anticipación para comprar entrada'
                        handleChange={funcion}
                        readOnly={readonly}
                    />
                    {
                        (readonly) ?
                            <InputComponent
                                type='textarea'
                                value={direccion}
                                name='direccion'
                                label='Dirección'
                                handleChange={funcion}
                            /> :

                            <DesplegableDireccion
                                funcion={funcion}
                                valorCCAA={Number(stateid)}
                                valorProv={Number(provinceid)}
                                valorPobl={Number(cityid)}
                            />


                    }
                    <InputComponent
                        type='text'
                        value={howToGetThere}
                        name='howToGetThere'
                        label='Cómo llegar'
                        handleChange={funcion}
                        readOnly={readonly}
                    />

                    {
                        (Musica) ?

                            <ListaCheckBox name="Musica"
                                table='n_music'
                                readValue={anadirMusica}
                                label="Tipos de musica"
                                activos={Musica}
                            />

                            :

                            <ListaCheckBox name="Musica"
                                table='n_music'
                                readValue={anadirMusica}
                                label="Tipos de musica"
                                activos=""
                            />

                    }
                    <InputLimite
                            handleChange={funcion}
                            name="club"
                            label=""
                            readOnly={readonly}
                            obj={obj}
                            esClub={true}
                        />
                </form>
            </div>
        </section>
    )
}
